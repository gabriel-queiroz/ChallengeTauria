import React from 'react';
import * as S from './styles';

// eslint-disable-next-line no-shadow
export enum CrustTypeEnum {
  Thin,
  Thick,
}

interface CrustProps {
  name: string;
  type: CrustTypeEnum;
}

const Crust: React.FC<CrustProps> = ({ name, type }) => {
  const SelectCrustType = () => {
    if (type === CrustTypeEnum.Thick)
      return <S.CrustThick>{name}</S.CrustThick>;

    return <S.CrustThin>{name}</S.CrustThin>;
  };

  return (
    <S.CrustContent>
      <SelectCrustType />
      <S.CrustPrice>+$2</S.CrustPrice>
    </S.CrustContent>
  );
};

export default Crust;
