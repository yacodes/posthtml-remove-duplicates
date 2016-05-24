import test from 'ava';
import posthtml from 'posthtml';
import plugin from '..';

const source = '<style>.a {color: black;}</style><style>.a {color: black;}</style>';

test('Must do nothing when no selectors provided', async t => {
	const {html} = await posthtml().use(plugin()).process(source);
	t.is(source, html);
});

test('Must remove duplicated elements', async t => {
	const expected = '<style>.a {color: black;}</style>';
	const {html} = await posthtml().use(plugin('style')).process(source);
	t.is(expected, html);
});
