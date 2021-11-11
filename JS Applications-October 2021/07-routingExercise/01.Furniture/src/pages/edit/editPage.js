import { editPageTemplate } from "./editTemplate.js";
import furnitureService from "../../services/furnitureService.js";

let form = undefined;
async function submitHandler(context,id, e) {
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
        let templateResult = editPageTemplate(form);
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

    await furnitureService.updateDashboard(newFurniture, id)
    context.page.redirect(`/details/${id}`);
}




async function viewPage(context) {
    let id = context.params['id'];
    let dataToEdit = await furnitureService.getDashboard(id);
    let boundSubmitFunction = submitHandler.bind(null, context, id);

    form = {
        data: {
            make: dataToEdit['make'],
            model: dataToEdit['model'],
            year: dataToEdit['year'],
            description: dataToEdit['description'],
            price: dataToEdit['price'],
            img: dataToEdit['img'],
        }
        ,
        submitHandler: boundSubmitFunction,
        isInvalidFields: {
        make: false,
        model: false,
        year: false,
        description: false,
        price: false,
        img: false,
        }
    }
    let templateResult = editPageTemplate(form);
    context.renderView(templateResult);
}

let editPage = {
    viewPage,
}

export default editPage;