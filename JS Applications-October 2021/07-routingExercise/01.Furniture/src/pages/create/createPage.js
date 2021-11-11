import furnitureService from "../../services/furnitureService.js";
import { createPageTemplate } from './createTemplate.js';

let form = undefined;
async function submitHandler(context, e) {
    e.preventDefault();
    let formData = new FormData(e.target);

    form.isInvalidFields = {};

    let make = formData.get('make');

    if (make.length < 4) {
        form.isInvalidFields['make'] = true;
    }

    let model = formData.get('model');
    if (model.length < 4) {
        form.isInvalidFields['model'] = true;
    }

    let year = Number(formData.get('year'));
    if (!(year >= 1950 && year <= 2050)) {
        form.isInvalidFields['year'] = true;
    }

    let description = formData.get('description');
    if (description.length < 10) {
        form.isInvalidFields['description'] = true;
    }

    let price = Number(formData.get('price'));
    if (!price > 0) {
        form.isInvalidFields['price'] = true;
    }

    let img = formData.get('img');
    if (img.trim() === '') {
        form.isInvalidFields['img'] = true;
    }

    let material = formData.get('material');

    if (Object.keys(form.isInvalidFields).length > 0) {
        let templateResult = createPageTemplate(form);
        return context.renderView(templateResult);
    }
    
    let newFurniture = {
        make,
        model,
        year,
        description,
        price,
        img,
        material,
    }

    await furnitureService.createDashboard(newFurniture)
    context.page.redirect('/dashboard');
}


async function viewPage(context) {
    let boundSubmitFunc = submitHandler.bind(null, context);
    form = {
        submitHandler: boundSubmitFunc,
        isInvalidFields: {
            make: true,
            model: true,
            year: true,
            description: true,
            price: true,
            img: true,
        },
    }
    let templateResult = createPageTemplate(form);
    context.renderView(templateResult);
}

let createPage = {
    viewPage,
}

export default createPage;