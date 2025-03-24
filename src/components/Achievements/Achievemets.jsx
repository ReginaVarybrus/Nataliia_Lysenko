import React, { useState } from 'react';

import {
  AchievementsStyled,
  AchievemetItem,
  Number,
} from './AchievemetsStyled.js';

export const Achievemets = () => {
  const [startSecond, setStartSecond] = useState(false);
  const [startThird, setStartThird] = useState(false);
  return (
    <AchievementsStyled>
      <AchievemetItem>
        <Number
          end={360}
          delay={0}
          duration={2.75}
          suffix="+"
          onEnd={() => setStartSecond(true)}
        />
        <p>of services provided</p>
      </AchievemetItem>
      <AchievemetItem>
        <Number
          start={0}
          end={startSecond ? 180 : 0}
          delay={0}
          duration={2.75}
          suffix="+"
          onEnd={() => setTimeout(() => setStartThird(true), 2750)}
        />
        <p>satisfied customers</p>
      </AchievemetItem>
      <AchievemetItem>
        <Number
          start={0}
          end={startThird ? 8 : 0}
          delay={0}
          duration={2.75}
          suffix="+"
        />
        <p>years of experience</p>
      </AchievemetItem>
    </AchievementsStyled>
  );
};
