import React, { useState, useEffect } from 'react'
import { Table, Button, Space, Tag } from 'antd';
import ReactHtmlParser from 'react-html-parser'
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux';
import FormEditProject from '../../components/FormEditProject/FormEditProject';

export default function ProjectManagement(props) {
    const projectList = useSelector(state => state.ProjectJiraBugsReducer.projectList) // lấy dữ liệu từ reducer thông qua hàm useSelector (sau đó chuyền xuống datasource= tên đã khai báo (projectList))


    // sử dụng useDispatch để gọi 1 action
    //khai báo useDispatch

    const dispatch = useDispatch();

    const [state, setState] = useState({
        filteredInfo: null,
        sortedInfo: null,
    })

    useEffect(() => {
        dispatch({ type: 'GET_LIST_PROJECT_SAGA' })
    }, [])

    const handleChange = (pagination, filters, sorter) => {
        console.log('Various parameters', pagination, filters, sorter);
        setState({
            filteredInfo: filters,
            sortedInfo: sorter,
        });
    };

    const clearFilters = () => {
        setState({ filteredInfo: null });
    };


    const clearAll = () => {
        setState({
            filteredInfo: null,
            sortedInfo: null,
        });
    };


    const setAgeSort = () => {
        setState({
            sortedInfo: {
                order: 'descend',
                columnKey: 'age',
            },
        });
    };

    let { sortedInfo, filteredInfo } = state;
    sortedInfo = sortedInfo || {};
    filteredInfo = filteredInfo || {};
    const columns = [
        {
            title: 'ID',      // hiển thị tên bảng
            dataIndex: 'id', // dặd đúng tên trên dữ liệu của const data
            key: 'id',
            sorter: (item2, item1) => { // item thứ 2 là số id ở vị trí thứ 2 trừ id vị trí thứ 1 nếu ra số âm thì hoán vị
                return item2.id - item1.id;
            },
            sortDirections: ['descend'],
        },
        {
            title: 'PROJECTNAME',
            dataIndex: 'projectName',
            key: 'projectName',
            sorter: (item2, item1) => {
                let projectName2 = item2.projectName?.trim().toLowerCase();
                let projectName1 = item1.projectName?.trim().toLowerCase();
                if (projectName2 < projectName1) {
                    return -1;
                }
                return 1;
            },
            sortDirections: ['descend'],
        },
        {
            title: 'CATOGERY',
            dataIndex: 'categoryName',
            key: 'categoryName',
            // render: (text, record, index) => {
            //     let jsxContent = ReactHtmlParser(text);

            //     return <div key={index}>
            //         {jsxContent}
            //     </div>

            // }
            sorter: (item2, item1) => {
                let category2 = item2.categoryName?.trim().toLowerCase();
                let category1 = item1.categoryName?.trim().toLowerCase();
                if (category2 < category1) {
                    return -1;
                }
                return 1;
            },
            sortDirections: ['descend'],

        },
        {
            title: 'CREATOR',
            // dataIndex: 'categoryName',
            key: 'categoryName',
            render: (text, record, index) => {
                return <Tag color="orange">{record.creator?.name}</Tag>
            },
            sorter: (item2, item1) => {
                let creator2 = item2.creator?.name.trim().toLowerCase();
                let creator1 = item1.creator?.name.trim().toLowerCase();
                if (creator2 < creator1) {
                    return -1;
                }
                return 1;
            },
            sortDirections: ['descend'],

        },
        {
            title: 'Action',
            key: 'action',
            render: (text, record, index) => (
                <Space size="middle">
                    <button className="btn mr-2 btn-primary" onClick={() => {
                        const action = {
                            type: 'OPEN_FORM_EDIT_PROJECT',
                            Component: <FormEditProject />
                        }
                        //dispatch lên reducer nội dung của drawer
                        dispatch(action)
                        // dispach dữ liệu hiện tại lên reducer
                        const actionEditProject = {
                            type: 'EDIT_PROJECT',
                            projectEditModal: record
                        }
                        dispatch(actionEditProject)
                    }}>
                        <EditOutlined />
                    </button>
                    <button className="btn ">
                        <DeleteOutlined />
                    </button>
                </Space>
            ),
        },
    ];
    return (
        <div className="container-fluid mt-5">
            <h3>PROJECT MANAGEMENT</h3>
            <Space style={{ marginBottom: 16 }}>
                <Button onClick={setAgeSort}>Sort age</Button>
                <Button onClick={clearFilters}>Clear filters</Button>
                <Button onClick={clearAll}>Clear filters and sorters</Button>
            </Space>
            <Table columns={columns} rowKey={"id"} dataSource={projectList} onChange={handleChange} />
        </div>
    )
}
