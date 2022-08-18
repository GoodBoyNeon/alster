import { greet } from '../src/index';

test('greet function', () => {
	expect(greet('nameValue')).toBe('Hey nameValue!');
});
