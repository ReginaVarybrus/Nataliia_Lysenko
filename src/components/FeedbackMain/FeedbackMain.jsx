import { Container } from '@mui/material';
import {
  ContentStyled,
  FeedbackMainStyled,
  HeaderFeedback,
  PhoneLink,
} from './FeedbackMainStyles';

const FeedbackMain = () => {
  return (
    <FeedbackMainStyled>
      <Container>
        <ContentStyled>
          <HeaderFeedback>
            <h2>Feedback</h2>
            <p>
              If you still have questions, leave a phone number and we'll call
              you
            </p>
          </HeaderFeedback>
          <PhoneLink href="tel:+3800507667898">+380 050 766 78 98</PhoneLink>
        </ContentStyled>
      </Container>
    </FeedbackMainStyled>
  );
};

export default FeedbackMain;
