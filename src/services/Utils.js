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
            temp[current] = value;
        } else {
            if(!(current in temp)) temp[current] = {};
        }
        temp = temp[current];
    }
    return result;
}
