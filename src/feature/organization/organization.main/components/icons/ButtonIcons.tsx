import { FC, CSSProperties } from "react";
import Image from "next/image";

interface Props {
  size?: number;
  style?: CSSProperties;
}

export const ManagementMemberIcon: FC<Props> = ({ size = 20, style }) => {
  return (
    <Image
      width={size}
      height={size}
      alt="멤버 관리 아이콘"
      src="/images/icons/management-member.svg"
      style={style}
    />
  );
};

export const ManagementInfoIcon: FC<Props> = ({ size = 20, style }) => {
  return (
    <Image
      width={size}
      height={size}
      alt="단체 정보 수정 아이콘"
      src="/images/icons/modify.svg"
      style={style}
    />
  );
};

export const ManagementRestaurantIcon: FC<Props> = ({ size = 20, style }) => {
  return (
    <Image
      width={size}
      height={size}
      alt="맛집 리스트 수정 아이콘"
      src="/images/icons/management-restaurant.svg"
      style={style}
    />
  );
};

export const MembersIcon: FC<Props> = ({ size = 20, style }) => {
  return (
    <Image
      width={size}
      height={size}
      alt="멤버 조회 아이콘"
      src="/images/icons/members.svg"
      style={style}
    />
  );
};

export const RegisterIcon: FC<Props> = ({ size = 20, style }) => {
  return (
    <Image
      width={size}
      height={size}
      alt="단체 가입 아이콘"
      src="/images/icons/register.svg"
      style={style}
    />
  );
};

export const FilterIcon: FC<Props> = ({ size = 20, style }) => {
  return (
    <Image
      width={size}
      height={size}
      alt="필터 아이콘"
      src="/images/icons/filter.svg"
      style={style}
    />
  );
};
