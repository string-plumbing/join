import test from 'ava';

import {join} from '#module';

const macro = test.macro({
	exec(t, strings, sep, expected) {
		t.is(join(strings, sep), expected);
	},
	title(title, strings, sep, expected) {
		return (
			title ??
			`join(${JSON.stringify(strings)}, ${JSON.stringify(
				sep,
			)}) = ${JSON.stringify(expected)}`
		);
	},
});

test(macro, [], 'x', '');
test(macro, 'bnn', 'a', 'banan');
test(macro, ['b', 'n', 'n', ''], 'a', 'banana');
