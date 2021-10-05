import React, { useRef, useEffect } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { withFormik } from 'formik';
import { connect, useSelector, useDispatch } from 'react-redux';
import * as Yup from 'yup';

function CreateProject(props) {

    const arrProjectCatogery = useSelector(state => state.ProjectCategoryReducer.arrProjectCategory)
    const dispatch = useDispatch();

    console.log('ket qua ', arrProjectCatogery)

    const {
        values,
        touched,
        errors,
        handleChange,
        handleBlur,
        handleSubmit,
        setFieldValue, //giúp chúng ta set lại giá trị value mà không phải thông qua handle nào hết
    } = props;

    useEffect(() => {

        // Gọi API để lấy dữ liệu cho thẻ Select
        dispatch(
            {
                type: 'GET_ALL_PROJECT_CATEGORY_SAGA'
            }
        )

    }, []) // chỉ load dữ liệu 1 lần trên browser

    const editorRef = useRef(null);
    const log = () => {
        if (editorRef.current) {
            console.log(editorRef.current.getContent());
        }
    };

    // hàm này được viết sẵn bởi thư viện tynymce Editor
    const handleEditorChange = (content, editor) => {
        console.log(props)
        setFieldValue('description', content)
    }

    return (
        <form onSubmit={handleSubmit} onChange={handleChange}>
            <div className="container">
                <h3>Create Project</h3>
                <div className="form-group d-block">
                    <p >Name</p>
                    {/* đặt tên cho giống tên ở API */}
                    <input className="form-control" name="projectName" />
                </div>
            </div>
            <div className="ml-3 form-group">
                <p>Description</p>
                <Editor
                    name="description"
                    onInit={(evt, editor) => editorRef.current = editor}

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
            <div className="container">
                <div className="form-group mt-3">
                    <select name="categoryId" className="form-control" onChange={handleChange}>
                        {arrProjectCatogery.map((item, index) => {
                            return (
                                <option value={item.id} key={index}>{item.projectCategoryName}</option>
                            )
                        })}
                    </select>
                </div>
            </div>
            <button type="submit" className="btn btn-outline-danger ml-3">Create project</button>
        </form>
    )
}
const CreateProjectFormik = withFormik({
    // đặt tên giống giống vs những tên trong API
    enableReinitialize: true,
    mapPropsToValues: (props) => {
        return {
            projectName: '',
            description: '',
            categoryId: props.arrProjectCategory[0]?.id,
        }
    },
    validationSchema: Yup.object().shape({
    }),

    handleSubmit: (values, { props, setSubmitting }) => {
        // sau khi nhấn nút đăng nhập sẽ nhảy xuống xử lý hàm này 
        console.log("valuessss", values)
        //khi nhấn nút sumbit sẽ nhảy qua file ProjectSaga hiển thị loading và xử lý dữ liệu call api bên file đó
        props.dispatch({
            type: 'CREATE_PROJECT_SAGA',
            newProject: values
        })
    },

    displayName: 'CreateProjectFormik',
})(CreateProject); // tên component của project

const mapStateToProps = (state) => ({
    // lấy thuộc tính từ reducer thì sử dụng hàm mapStateToProps

    arrProjectCategory: state.ProjectCategoryReducer.arrProjectCategory

})


export default connect(mapStateToProps)(CreateProjectFormik)