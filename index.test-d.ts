import { Buffer } from 'node:buffer';
import { expectType } from 'tsd';
import ansiEscapes, {
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
} from './index.js';

// default export (object)
expectType<string>(ansiEscapes.cursorTo(0));	expectType<string>(cursorTo(0));
expectType<string>(ansiEscapes.cursorTo(0, 1));	expectType<string>(cursorTo(0, 1));
expectType<string>(ansiEscapes.cursorMove(0));	expectType<string>(cursorMove(0));
expectType<string>(ansiEscapes.cursorMove(0, 1));	expectType<string>(cursorMove(0, 1));
expectType<string>(ansiEscapes.cursorUp());	expectType<string>(cursorUp());
expectType<string>(ansiEscapes.cursorUp(1));	expectType<string>(cursorUp(1));
expectType<string>(ansiEscapes.cursorDown());	expectType<string>(cursorDown());
expectType<string>(ansiEscapes.cursorDown(1));	expectType<string>(cursorDown(1));
expectType<string>(ansiEscapes.cursorForward());	expectType<string>(cursorForward());
expectType<string>(ansiEscapes.cursorForward(1));	expectType<string>(cursorForward(1));
expectType<string>(ansiEscapes.cursorBackward());	expectType<string>(cursorBackward());
expectType<string>(ansiEscapes.cursorBackward(1));	expectType<string>(cursorBackward(1));
expectType<string>(ansiEscapes.cursorLeft);	expectType<string>(cursorLeft);
expectType<string>(ansiEscapes.cursorSavePosition);	expectType<string>(cursorSavePosition);
expectType<string>(ansiEscapes.cursorRestorePosition);	expectType<string>(cursorRestorePosition);
expectType<string>(ansiEscapes.cursorGetPosition);	expectType<string>(cursorGetPosition);
expectType<string>(ansiEscapes.cursorNextLine);	expectType<string>(cursorNextLine);
expectType<string>(ansiEscapes.cursorPrevLine);	expectType<string>(cursorPrevLine);
expectType<string>(ansiEscapes.cursorHide);	expectType<string>(cursorHide);
expectType<string>(ansiEscapes.cursorShow);	expectType<string>(cursorShow);
expectType<string>(ansiEscapes.eraseLines(2));	expectType<string>(eraseLines(2));
expectType<string>(ansiEscapes.eraseEndLine);	expectType<string>(eraseEndLine);
expectType<string>(ansiEscapes.eraseStartLine);	expectType<string>(eraseStartLine);
expectType<string>(ansiEscapes.eraseLine);	expectType<string>(eraseLine);
expectType<string>(ansiEscapes.eraseDown);	expectType<string>(eraseDown);
expectType<string>(ansiEscapes.eraseUp);	expectType<string>(eraseUp);
expectType<string>(ansiEscapes.eraseScreen);	expectType<string>(eraseScreen);
expectType<string>(ansiEscapes.scrollUp);	expectType<string>(scrollUp);
expectType<string>(ansiEscapes.scrollDown);	expectType<string>(scrollDown);
expectType<string>(ansiEscapes.clearScreen);	expectType<string>(clearScreen);
expectType<string>(ansiEscapes.clearTerminal);	expectType<string>(clearTerminal);
expectType<string>(ansiEscapes.enterAlternativeScreen);	expectType<string>(enterAlternativeScreen);
expectType<string>(ansiEscapes.exitAlternativeScreen);	expectType<string>(exitAlternativeScreen);
expectType<string>(ansiEscapes.beep);	expectType<string>(beep);
expectType<string>(ansiEscapes.link('foo', 'https://foo.bar'));	expectType<string>(link('foo', 'https://foo.bar'));
expectType<string>(ansiEscapes.image(Buffer.from('1')));	expectType<string>(image(Buffer.from('1')));
expectType<string>(ansiEscapes.image(Buffer.from('1'), {width: 1}));	expectType<string>(image(Buffer.from('1'), {width: 1}));
expectType<string>(ansiEscapes.image(Buffer.from('1'), {width: '1px'}));	expectType<string>(image(Buffer.from('1'), {width: '1px'}));
expectType<string>(ansiEscapes.image(Buffer.from('1'), {width: 'auto'}));	expectType<string>(image(Buffer.from('1'), {width: 'auto'}));
expectType<string>(ansiEscapes.image(Buffer.from('1'), {height: 1}));	expectType<string>(image(Buffer.from('1'), {height: 1}));
expectType<string>(ansiEscapes.image(Buffer.from('1'), {height: '1px'}));	expectType<string>(image(Buffer.from('1'), {height: '1px'}));
expectType<string>(ansiEscapes.image(Buffer.from('1'), {height: 'auto'}));	expectType<string>(image(Buffer.from('1'), {height: 'auto'}));
expectType<string>(ansiEscapes.image(Buffer.from('1'), {height: 'auto'}));
expectType<string>(
	ansiEscapes.image(Buffer.from('1'), {preserveAspectRatio: false}),
);
expectType<string>(ansiEscapes.iTerm.setCwd('/foo/bar'));
expectType<string>(ansiEscapes.iTerm.annotation('foo bar'));

// named exports
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
expectType<string>(link('foo', 'https://foo.bar'));
expectType<string>(image(Buffer.from('1')));
expectType<string>(image(Buffer.from('1'), {width: 1}));
expectType<string>(image(Buffer.from('1'), {width: '1px'}));
expectType<string>(image(Buffer.from('1'), {width: 'auto'}));
expectType<string>(image(Buffer.from('1'), {height: 1}));
expectType<string>(image(Buffer.from('1'), {height: '1px'}));
expectType<string>(image(Buffer.from('1'), {height: 'auto'}));
expectType<string>(image(Buffer.from('1'), {preserveAspectRatio: false}));
expectType<string>(iTerm.setCwd('/foo/bar'));
expectType<string>(iTerm.annotation('foo bar'));
