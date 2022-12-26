export default function validator(options) {

    function getParent(element, selector){
        while (element.parentElement) {
            if (element.parentElement.matches(selector)) {
                return element.parentElement
            }

            element = element.parentElement
        }
    }

    var selectorRules = {};

    // Hàm thực hiện validate
    function validator(inputElement, rule) {
        let errorMessage;
        let errorElement = getParent(inputElement, options.formGroupSelector).querySelector(options.errorSelector)
        let rules = selectorRules[rule.seletor]

        for (let fn of rules){
            switch (inputElement.type) {
                case 'checkbox':
                case 'radio':
                    errorMessage = fn(formElement.querySelector(rule.seletor + ":checked"))
                    break;
            
                default:
                    errorMessage = fn(inputElement.value)
            }
            if (errorMessage) break;
        }

        if (errorMessage) {
            errorElement.innerText = errorMessage
            getParent(inputElement, options.formGroupSelector).classList.add('invalid')
        } else {
            errorElement.innerText = null
            getParent(inputElement, options.formGroupSelector).classList.remove('invalid')
        }

        return !errorMessage
    }


    var formElement = document.querySelector(options.form)

    if (formElement) {

        formElement.onsubmit = function(e) {
            e.preventDefault()

            let isFormValid = true;
            
            options.rules.forEach( rule => {
                let inputElement = formElement.querySelector(rule.seletor)
                let isValid = validator(inputElement, rule)

                if (!isValid) {
                    isFormValid = false
                }

            });        

            if (isFormValid){
                // submit với js
                if (typeof options.onSubmit === 'function') {
                    let listInput = Array.from(formElement.querySelectorAll('[name]')) 
                    let data = listInput.reduce( (values, input) => {
                        switch (input.type) {
                            case 'file':
                                values[input.name] = input.files
                                break;
                            case 'radio':
                                values[input.name] = formElement.querySelector(`input[name="${input.name}"]:checked`).value
                                break;
                            case 'checkbox':
                                if (!input.matches(':checked')) {
                                    values[input.name] = []
                                    return values;
                                }
                                
                                if (!Array.isArray(values[input.name])) {
                                    values[input.name] = []
                                }

                                values[input.name].push(input.value)
                                break;
                        
                            default:
                                values[input.name] = input.value
                                break;
                        }
                        return values ;
                    }, {})

                    options.onSubmit(data)
                    // submit với hành vi mặc định
                } else {
                    formElement.submit()
                }
            } else {
                console.log('Error');
            }
        } 

        
        options.rules.forEach( rule => {
            // Lưu lại các rule cho mỗi input
            if (Array.isArray(selectorRules[rule.seletor])) {
                selectorRules[rule.seletor].push(rule.test)
            } else {
                selectorRules[rule.seletor] = [rule.test]
            }

            let inputElements = formElement.querySelectorAll(rule.seletor)

            Array.from(inputElements).forEach( inputElement => {
                // Xử lí blur khỏi input
                inputElement.onblur = function() {
                    validator(inputElement, rule)
                }

            // Xử lí khi đang nhập => phải tắt lỗi
                inputElement.oninput = function() {
                    let errorElement = getParent(inputElement, options.formGroupSelector).querySelector(options.errorSelector)
                    errorElement.innerText = null
                    getParent(inputElement, options.formGroupSelector).classList.remove('invalid')
                }   
            })

        })

    }

}

validator.isRequired = function(seletor) {
    return {
        seletor,
        test: function(value) {
            return value ? undefined : "Vui lòng nhập trường này"
        }
    }
}

validator.isEmail = function(seletor) {
    return {
        seletor,
        test: function(value) {
            var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
            return regex.test(value) ? undefined : "Trường này phải là Email"
        }
    }
}

validator.minLength = function(seletor, min) {
    return {
        seletor,
        test: function(value) {
            return value.length >=min ? undefined : `Vui lòng nhập tối thiểu ${min} kí tự`
        }
    }
}

validator.isComfirmedPassword = function(seletor, getConfirmValue, message) {
    return {
        seletor,
        test: function(value) {
            return value === getConfirmValue() ? undefined : message || "Dữ liệu nhập vào không chính xác"
        }
    }
}