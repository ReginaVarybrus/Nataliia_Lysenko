import { Container } from '@styles/GlobalStyles';
import {
  ContentStyled,
  FeedbackMainStyled,
  HeaderFeedback,
  PhoneLink,
  FeedbackBlock,
} from './FeedbackMainStyles';

const FeedbackMain = () => {
  return (
    <FeedbackMainStyled>
      <Container>
        <ContentStyled>
          <FeedbackBlock>
            <HeaderFeedback>
              <h2>Feedback</h2>
              <p>
                If you still have questions, leave a phone number and we'll call
                you
              </p>
            </HeaderFeedback>
            <PhoneLink href="tel:+3800507667898">+380 050 766 78 98</PhoneLink>
          </FeedbackBlock>
        </ContentStyled>
      </Container>
    </FeedbackMainStyled>
  );
};

export default FeedbackMain;
