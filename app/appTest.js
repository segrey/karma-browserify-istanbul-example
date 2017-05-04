'use strict';

import { foo } from './app';

describe('test', function() {

    it('foo', function() {
        expect(foo()).toBe('foo');
    });

});


