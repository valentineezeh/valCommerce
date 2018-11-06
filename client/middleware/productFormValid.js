import isEmpty from 'is-empty';

export default function rideValidator(data) {
    const errors = {};
    if (!data.Name) {
        errors.Name = 'Product Name is required'; 
    }
        
    if (!data.Description) {
        errors.Description = 'Product Description is required';
    }
        
    if (!data.Color) {
        errors.Color = 'Product Color is required';
    }

    if (!data.Price) {
        errors.Price = 'Product Price is required';
    }
        
    if (data.Name && data.Name.toString().trim() === '') {
        errors.Name = 'Product Name point is required';
    } 
    if (data.Description && data.Description.toString().trim() === '') {
        errors.Description = 'Product Description is required';
    }
    if (data.Color && data.Color.toString().trim() === '') {
        errors.Color = 'Product Color is required';
    }
    if (data.Price && data.Price.toString().trim() === '') {
        errors.Price = 'Product Price is required';
    }

    return {
        errors,
        isValid: isEmpty(errors)
    };
}