import _ from "lodash";

export function setFieldInObject(field, value, object) {
    let result, fields, current, temp;
    fields = field.split('.');
    result = _.cloneDeep(object);
    temp = result;
    while(fields.length > 0)
    {
        current = fields.shift();
        if(fields.length <= 0) {
            temp[current] = value.toString();
        } else {
            if(!(current in temp)) temp[current] = {};
        }
        temp = temp[current];
    }
    return result;
}

export function boldDescItem(item) {
    item = item.split(':');
    if (item.length < 2) {
        return item[0];
    }
    return item[0].concat(`: <b>${item[1]}</b>`);
}
