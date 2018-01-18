export default {
    customEmailValidation(rule, value, callback, source, options) {
        var errors = [];

        if(value !== 'test@mail.com') {
          errors.push(new Error(`${rule.field} is invalid`));
        }
        
        callback(errors);
    }
}