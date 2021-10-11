import { Editor } from '@tinymce/tinymce-react'
import { withFormik } from 'formik';
import React, { useEffect, useRef } from 'react'
import { useDispatch, connect, useSelector } from 'react-redux';
import * as Yup from 'yup';

function FormEditProject(props) {
    const {
        values,
        touched,
        errors,
        handleChange,
        handleBlur,
        handleSubmit,
        setFieldValue, //giúp chúng ta set lại giá trị value mà không phải thông qua handle nào hết
    } = props;

    const arrProjectCatogery = useSelector(state => state.ProjectCategoryReducer.arrProjectCategory)
    const dispatch = useDispatch();




    // const submitForm = (e) => {
    //     e.preventDefault();
    //     alert('submit edit')
    // }

    useEffect(() => {
        // gọi API  load project category
        dispatch(
            {
                type: 'GET_ALL_PROJECT_CATEGORY_SAGA'
            }
        )
        // load sự kiện sumbit len drawer nút submit
        dispatch(
            {
                type: 'SET_SUBMIT_EDIT_PROJECT', submitFunton: handleSubmit
            }
        )
    }, [])
    const editorRef = useRef(null);
    const log = () => {
        if (editorRef.current) {
            console.log(editorRef.current.getContent());
        }
    };
    // const editorRef = useRef(null);
    const handleEditorChange = (content, editor) => {
        setFieldValue('description', content)
    }

    return (
        <form className="container-fuild" onSubmit={handleSubmit}>
            <div className="row">
                <div className="col-4">
                    <div className="form-group">
                        <p className="font-weight-bold">Project id</p>
                        <input value={values.id} disabled className="form-control" name="id" />
                    </div>
                </div>
                <div className="col-4">
                    <div className="form-group">
                        <p className="font-weight-bold">Project name</p>
                        <input value={values.projectName} className="form-control" name="projectName" onChange={handleChange} />
                    </div>
                </div>
                {/* <div className="col-4">
                    <div className="form-group">
                        <p className="font-weight-bold">Project Category</p>
                        <select className="form-control" name='categoryId' value={values.categoryId}>
                            {arrProjectCatogery?.map((item, index) => {
                                return <option value={item.id} key={index}>
                                    {item.projectCategoryName}</option>
                            })}
                        </select>
                    </div>
                </div> */}
                <div className="col-4">
                    <div className="form-group">
                        <p className="font-weight-bold">Project Category</p>
                        <select className="form-control" name="categoryId" value={values.categoryId}>
                            {arrProjectCatogery?.map((item, index) => {
                                return <option key={index} value={item.id}>
                                    {item.projectCategoryName}
                                </option>
                            })}
                        </select>


                    </div>
                </div>
                <div className="col-12 ">
                    <div className="form-group">
                        <p className="font-weight-bold">Description</p>
                        <Editor
                            name="description"
                            onInit={(evt, editor) => editorRef.current = editor}
                            value={values.description}
                            init={{
                                height: 500,
                                menubar: false,
                                plugins: [
                                    'advlist autolink lists link image charmap print preview anchor',
                                    'searchreplace visualblocks code fullscreen',
                                    'insertdatetime media table paste code help wordcount'
                                ],
                                toolbar: 'undo redo | formatselect | ' +
                                    'bold italic backcolor | alignleft aligncenter ' +
                                    'alignright alignjustify | bullist numlist outdent indent | ' +
                                    'removeformat | help',
                                content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                            }}
                            onEditorChange={handleEditorChange}
                        />
                    </div>
                </div>
            </div>
        </form>
    )
}
const EditProjectForm = withFormik({
    // đặt tên giống giống vs những tên trong API
    enableReinitialize: true,
    mapPropsToValues: (props) => {
        const { projectEdit } = props
        return {
            id: projectEdit.id,
            projectName: projectEdit.projectName,
            description: projectEdit.description,
            categoryId: projectEdit.categoryId
            // categoryId: props.arrProjectCategory[0]?.id,
        }
    },
    validationSchema: Yup.object().shape({
    }),

    handleSubmit: (values, { props, setSubmitting }) => {
        // sau khi nhấn nút đăng nhập sẽ nhảy xuống xử lý hàm này 
        console.log('====================================');
        console.log('ket qua', values);
        console.log('====================================');
        //khi nhấn nút sumbit sẽ nhảy qua file ProjectSaga hiển thị loading và xử lý dữ liệu call api bên file đó
        const action = {
            type: 'UPDATE_PROJECT_SAGA',
            projectUpdate: values,
        }
        props.dispatch(action)
    },

    displayName: 'EditProjectForm',
})(FormEditProject); // tên component của project

const mapStateToProps = (state) => ({
    // lấy thuộc tính từ reducer thì sử dụng hàm mapStateToProps

    projectEdit: state.ProjectReducer.projectEdit

})


export default connect(mapStateToProps)(EditProjectForm)