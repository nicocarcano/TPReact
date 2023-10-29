import { ModalType } from "../../types/ModalType";
import { Product } from "../../types/Product";
//Dependencias para validar formularios
import * as Yup from "yup";
import { useFormik } from 'formik';
import { Button, FormControl, Modal, Form } from "react-bootstrap";
import { ProductService } from "../../services/ProductService";
//Notificaciones al usuario
import { toast } from "react-toastify";

type ProductModalProps = {
    	show: boolean;
    	onHide: () => void;
    	title:string;
        modalType: ModalType;
        prod: Product;
        refreshData: React.Dispatch<React.SetStateAction<boolean>>;
  };

const ProductModal = ({show, onHide, title, modalType, prod, refreshData}:ProductModalProps) => {
    //CREATE - UPDATE
    const handleSaveUpdate = async (pro: Product) => {
        try {
            const isNew = pro.id === 0;
            if (isNew) {
                await ProductService.createProduct(pro);
            } else {
                await ProductService.updateProduct(pro.id, pro);
            }

            toast.success(isNew ? "Producto Creado" : "Producto Actualizado", {
                position: "top-center",
              });

            onHide();
            refreshData(prevState => !prevState);
        } catch (error) {
            console.error(error);
        }
    };


    //DELETE
    const handleDelete = async () => {
        try {
            await ProductService.deleteProduct(prod.id);
            toast.success("Producto Borrado", {
                position: "top-center",
              });

            onHide();
            refreshData(prevState => !prevState);
        } catch (error) {
            console.error(error);
            toast.error('A ocurrido un Error');
        }
    }

    
    //Yup, esquema de validación
    const validationSchema = () => {
        return Yup.object().shape({
        id: Yup.number().integer().min(0),
        title: Yup.string().required('El titulo es requerido'),
        price: Yup.number().min(0).required('El precio es requerido'),
        description: Yup.string().required('La descripcion es requerida'),
        category: Yup.string().required('La categoria es requerida'),
        image: Yup.string().required('La URL de la imagen es requerida'),
                });
     };

    //Formik utiliza el esquema de validacion para crear un formulario dinámico y que lo bloquee en caso de haber errores
    const formik = useFormik({
        initialValues: prod,
        validationSchema: validationSchema(),
        validateOnChange: true,
        validateOnBlur: true,
        onSubmit: (obj: Product) => handleSaveUpdate(obj),
    });


    return(
        <>
        {modalType === ModalType.DELETE ? (
            <>
            <Modal show={show} onHide={onHide} centered backdrop="static">
                <Modal.Header closeButton>
                    <Modal.Title>{title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>¿Está seguro que desea eliminar el Producto?<br/> <strong>{prod.title}</strong>?</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={onHide}>
                    Cancelar
                    </Button>
                    <Button variant="danger" onClick={handleDelete}>
                    Borrar
                    </Button>
                </Modal.Footer>
            </Modal>
            
            </>
        ) : (
            <>
            <Modal show={show} onHide={onHide} centered backdrop="static" className="modal-xl">
                <Modal.Header closeButton>
                    <Modal.Title>{title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    
                        <Form onSubmit={formik.handleSubmit}>
                    
                        <Form.Group controlId="formTitulo">
                            <Form.Label> Titulo </Form.Label>
                            <Form.Control
                                name="title"
                                type="text"
                                value={formik.values.title || ''}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                isInvalid={Boolean(formik.errors.title && formik.touched.title)}
                            />
                            <FormControl.Feedback type="invalid">
                            {formik.errors.title}
                            </FormControl.Feedback>
                        </Form.Group>

                        
                        <Form.Group controlId="formPrice">
                            <Form.Label> Precio </Form.Label>
                            <Form.Control
                                name="price"
                                type="number"
                                value={formik.values.price || ''}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                isInvalid={Boolean(formik.errors.price && formik.touched.price)}
                            />
                            <FormControl.Feedback type="invalid">
                            {formik.errors.price}
                            </FormControl.Feedback>
                        </Form.Group>

                        
                        <Form.Group controlId="formDescription">
                            <Form.Label> Descripcion </Form.Label>
                            <Form.Control
                                name="description"
                                type="text"
                                value={formik.values.description || ''}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                isInvalid={Boolean(formik.errors.description && formik.touched.description)}
                            />
                            <FormControl.Feedback type="invalid">
                            {formik.errors.description}
                            </FormControl.Feedback>
                        </Form.Group>

                        
                        <Form.Group controlId="formCategory">
                            <Form.Label> Categoria </Form.Label>
                            <Form.Control
                                name="category"
                                type="text"
                                value={formik.values.category || ''}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                isInvalid={Boolean(formik.errors.category && formik.touched.category)}
                            />
                            <FormControl.Feedback type="invalid">
                            {formik.errors.category}
                            </FormControl.Feedback>
                        </Form.Group>

                        <Form.Group controlId="formImage">
                            <Form.Label> Imagen </Form.Label>
                            <Form.Control
                                name="image"
                                type="text"
                                value={formik.values.image || ''}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                isInvalid={Boolean(formik.errors.image && formik.touched.image)}
                            />
                            <FormControl.Feedback type="invalid">
                            {formik.errors.image}
                            </FormControl.Feedback>
                        </Form.Group>

                        <Modal.Footer className="mt-4">
                        <Button variant="secondary" onClick={onHide}> Cancelar </Button>
                        <Button variant="primary" type="submit" disabled={!formik.isValid}> Guardar </Button>
                        </Modal.Footer>
                    </Form>
                </Modal.Body>
            </Modal>
            </>
        )}
        </>


    )
}

export default ProductModal;
