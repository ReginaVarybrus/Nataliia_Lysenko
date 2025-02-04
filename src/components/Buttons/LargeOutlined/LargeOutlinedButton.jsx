import { LargeOutlinedButtonStyled } from '@/components/Buttons/LargeOutlined/LargeOutlinedButtonStyled';

const LargeOutlinedButton = ({
  text,
  handleClick,
  $mobilestyles,
  $desktopstyles,
  $isActive,
}) => (
  <LargeOutlinedButtonStyled
    onClick={handleClick}
    $mobilestyles={$mobilestyles}
    $desktopstyles={$desktopstyles}
    $isActive={$isActive}
  >
    {text}
  </LargeOutlinedButtonStyled>
);

export default LargeOutlinedButton;
