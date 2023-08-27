import styled from "@emotion/styled";
import { createPortal } from "react-dom";
import { PORTAL_ID } from "constant/portal";
import { hexToRgba } from "utils/color/hexToRgba";
import usePreventScroll from "hooks/usePreventScroll";
import { HTMLAttributes, ReactNode, useEffect, useState } from "react";
import Button from "components/button/Button";

function ScrollPreventer() {
  usePreventScroll();
  return null;
}

interface Props extends Omit<HTMLAttributes<HTMLDivElement>, "title"> {
  title: ReactNode;
  content?: string;
  open: boolean;
  onClose: () => void;
  withCloseButton?: boolean;
  actionButtons?: ReactNode; // 주어지면 기본 버튼은 없어짐

  confirmText?: string;
  onConfirm?: () => void;

  cancelText?: string;
  onCancel?: () => void;

  danger?: boolean; // confirm 버튼을 빨간색으로 표시
}

function Modal({
  open,
  onClose,
  title,
  children,
  content,
  actionButtons,
  confirmText = "확인",
  onConfirm = onClose,
  cancelText = "취소",
  onCancel = () => {},
  danger = false,
}: Props) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const modal = (
    <EmotionWrapper>
      {open && (
        <>
          <ScrollPreventer />
          <div
            className="dimmed"
            onClick={({ target, currentTarget }) => {
              if (target === currentTarget) onClose();
            }}
          >
            <div className="content-wrapper">
              <div className="default-content-wrapper">
                <p className="title">{title}</p>
                <p className="content">{content}</p>
              </div>
              {children}
              <div className="action-button-container">
                {actionButtons ?? (
                  <>
                    <Button
                      variant="secondary"
                      onClick={() => {
                        onCancel();
                        onClose();
                      }}
                    >
                      {cancelText}
                    </Button>
                    <Button
                      danger={danger}
                      onClick={() => {
                        onConfirm();
                      }}
                    >
                      {confirmText}
                    </Button>
                  </>
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </EmotionWrapper>
  );

  if (mounted) return createPortal(modal, document.getElementById(PORTAL_ID)!);
  return null;
}

export default Modal;

const EmotionWrapper = styled.div`
  .dimmed {
    position: fixed;
    top: 0;
    left: 0;

    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 100%;

    background-color: ${({ theme }) => hexToRgba(theme.color.gray900, 0.1)};

    z-index: 1;

    p.title {
      font-size: 16px;
      font-weight: 600;
      line-height: 1.5;
      color: ${({ theme }) => theme.color.gray900};
    }

    p.content {
      margin-top: 8px;
      font-size: 14px;
      font-weight: 400;
      line-height: 1.5;
      color: ${({ theme }) => theme.color.gray900};
    }

    .content-wrapper {
      position: relative;
      background-color: ${({ theme }) => theme.color.white};
      border-radius: 8px;
      padding: 24px;
      width: 100%;
      /* max-width: 400px; */
      margin: 0 32px;
      box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
      display: flex;
      flex-direction: column;

      .action-button-container {
        margin-top: 32px;
        display: flex;
        align-self: flex-end;
        column-gap: 8px;
      }
    }
  }
`;
