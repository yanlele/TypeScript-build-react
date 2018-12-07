

/**
 * Check form's error
 * @param  {object}  fieldsError Fields Error
 * @return {boolean}             Error status
 */
export function formHasErrors(fieldsError: object): boolean {
    return Object.keys(fieldsError).some((field) => {
        if (fieldsError[field]) {
            if (typeof fieldsError[field][0] === 'string') {
                return true;
            } else {
                return formHasErrors(fieldsError[field]);
            }
        }
        return false;
    });
}

/**
 * Get form field placehoder
 * @param  {string} placeholderTemplate Placeholder template
 * @param  {string} fieldName           Field name
 * @return {string}                     Placeholder text
 */
export function getFormFieldPlaceholder(placeholderTemplate: string, fieldName: string): string {
    return placeholderTemplate.replace(/\$\{field\}/g, fieldName);
}
