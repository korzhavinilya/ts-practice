import { dependencyInversionPrinciple } from './dependencyInversionPrinciple';
import { interfaceSegregationPrinciple } from './interfaceSegregationPrinciple';
import { liskovSubstitutionPrinciple } from './liskovSubstitutionPrinciple';
import { openClosedPrinciple } from './openClosedPrinciple';
import { singleResponsibilityPrinciple } from './singleResponsibilityPrinciple';

export function explainSolidPrinciples() {
  singleResponsibilityPrinciple();
  openClosedPrinciple();
  liskovSubstitutionPrinciple();
  interfaceSegregationPrinciple();
  dependencyInversionPrinciple();
}
