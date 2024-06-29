// Uncaught Error: Dynamic require of "./compiled/en.json" is not supported
import { register as registerWithConcat } from "dynamic-require-concat";
registerWithConcat();

// Works
import { register as registerWithTemplateString } from "dynamic-require-template-string";
registerWithTemplateString();
