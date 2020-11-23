import { errorMessage, responseController } from './../libs/constant';
export const roleValidation = {
    role: {
        required: false,
        string: true,
        in: ['body'],
        error: errorMessage.occured,
        message: errorMessage.role,
    },
};

export const deletedByValidation = {
    required: true,
    string: true,
    errorMessage: errorMessage.deltedBy,
    in: ['body']
};

export const originalIdValidation = {
    required: true,
    string: true,
    errorMessage: errorMessage.id,
    in: ['body']
};