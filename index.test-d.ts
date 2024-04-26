import { Buffer } from "node:buffer";
import { expectType } from "tsd";

import {
	beep,
	clearScreen,
	clearTerminal,
	cursorBackward,
	cursorDown,
	cursorForward,
	cursorGetPosition,
	cursorHide,
	cursorLeft,
	cursorMove,
	cursorNextLine,
	cursorPrevLine,
	cursorRestorePosition,
	cursorSavePosition,
	cursorShow,
	cursorTo,
	cursorUp,
	enterAlternativeScreen,
	eraseDown,
	eraseEndLine,
	eraseLine,
	eraseLines,
	eraseScreen,
	eraseStartLine,
	eraseUp,
	exitAlternativeScreen,
	iTerm,
	image,
	link,
	scrollDown,
	scrollUp,
} from "./index.js";

expectType<string>(cursorTo(0));
expectType<string>(cursorTo(0, 1));
expectType<string>(cursorMove(0));
expectType<string>(cursorMove(0, 1));
expectType<string>(cursorUp());
expectType<string>(cursorUp(1));
expectType<string>(cursorDown());
expectType<string>(cursorDown(1));
expectType<string>(cursorForward());
expectType<string>(cursorForward(1));
expectType<string>(cursorBackward());
expectType<string>(cursorBackward(1));
expectType<string>(cursorLeft);
expectType<string>(cursorSavePosition);
expectType<string>(cursorRestorePosition);
expectType<string>(cursorGetPosition);
expectType<string>(cursorNextLine);
expectType<string>(cursorPrevLine);
expectType<string>(cursorHide);
expectType<string>(cursorShow);
expectType<string>(eraseLines(2));
expectType<string>(eraseEndLine);
expectType<string>(eraseStartLine);
expectType<string>(eraseLine);
expectType<string>(eraseDown);
expectType<string>(eraseUp);
expectType<string>(eraseScreen);
expectType<string>(scrollUp);
expectType<string>(scrollDown);
expectType<string>(clearScreen);
expectType<string>(clearTerminal);
expectType<string>(enterAlternativeScreen);
expectType<string>(exitAlternativeScreen);
expectType<string>(beep);
expectType<string>(link("foo", "https://foo.bar"));
expectType<string>(image(Buffer.from("1")));
expectType<string>(image(Buffer.from("1"), { width: 1 }));
expectType<string>(image(Buffer.from("1"), { width: "1px" }));
expectType<string>(image(Buffer.from("1"), { width: "auto" }));
expectType<string>(image(Buffer.from("1"), { height: 1 }));
expectType<string>(image(Buffer.from("1"), { height: "1px" }));
expectType<string>(image(Buffer.from("1"), { height: "auto" }));
expectType<string>(image(Buffer.from("1"), { preserveAspectRatio: false }));
expectType<string>(iTerm.setCwd("/foo/bar"));
expectType<string>(iTerm.annotation("foo bar"));
