import "ress";
import "./styles/style.css";
// @ts-expect-error
import decomp from "poly-decomp";
import { Common } from "matter-js";
Common.setDecomp(decomp);
import "pathseg";
