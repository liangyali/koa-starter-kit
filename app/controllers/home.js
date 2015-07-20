"use strict";

import {User} from '../models'

export  default  {
    get: function*() {
        this.body = yield User.findAll({
            limit: 20
        });
    }
};