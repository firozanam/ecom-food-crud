
class ValidationHelper{

    isEmpty(value){
        if (value.length===0){
            return true
        }
        else {
            return false
        }
    }


}

export const {isEmpty} = new ValidationHelper();
