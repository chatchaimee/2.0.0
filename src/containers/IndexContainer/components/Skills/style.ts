import styled from "styled-components";

import { SkillsValuesPropsModel } from "models";

export const SkillsValues = styled.div<SkillsValuesPropsModel>`
  width: ${({ width }) => width};
`;
