import React from 'react'

export default function ModalJiraBugs() {
    return (
        <div className="modal fade" id="infoModal" tabIndex={-1} role="dialog" aria-aria-labelledby="infoModal" aria-hidden="true">
            <div className="modal-dialog modal-info">
                <div className="modal-header">
                    <div className="task-title">
                        <i className="fa fa-bookmark" />
                        <span>TASK-54645</span>
                    </div>
                    <div className="task-click" style={{ display: 'flex' }}>
                        <div>
                            <i className="fab fa-telegram-plane" />
                            <span style={{ paddingRight: 20 }}>
                                Give Feed Back
                            </span>
                        </div>
                        <div>
                            <i className="fab fa-telegram-plane" />
                            <span style={{ paddingRight: 20 }}>
                                Copy link
                            </span>
                        </div>
                        <i className="fa fa-trash-alt" style={{ cursor: "pointer" }} />
                        <button type="button" className="close" data-dismiss="modal" aria-label="close">
                            <span arri-hidden="true">x</span>
                        </button>
                    </div>
                </div>
            </div>
            <div className="modal-body">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-8">
                            <p className="issue">This is an issue of type: Task.</p>
                            <div className="description">
                                <p>Description</p>

                            </div>
                            <div className="comment">
                                <h6>Comment</h6>
                                <div className="block-comment" style={{ display: 'flex' }}>
                                    <div className="avatar">
                                        <img src="https://picsum.photos/200/200" alt='xyz' />
                                    </div>
                                    <div className="input-comment">
                                        <input type="text" placeholder="Add a comment ..." />
                                        <p>
                                            <span style={{ fontWeight: 500, color: 'gray' }}>Protip:</span>
                                            <span>press
                                                <span style={{ fontWeight: 'bold', background: '#ecedf0', color: '#b4bac6' }}>M</span>
                                                to comment</span>
                                        </p>
                                    </div>
                                </div>
                                <div className="lastest-comment">
                                    <div className="comment-item">
                                        <div className="display-comment" style={{ display: 'flex' }}>
                                            <div className="avatar">
                                                <img src="https://picsum.photos/200/200" alt='xyz' />
                                            </div>
                                            <div>
                                                <p style={{ marginBottom: 5 }}>
                                                    Lord Gaben <span>a month ago</span>
                                                </p>
                                                <p style={{ marginBottom: 5 }}>
                                                    Lorem ipsum dolor sit amet, consectetur
                                                    adipisicing elit. Repellendus tempora ex
                                                    voluptatum saepe ab officiis alias totam ad
                                                    accusamus molestiae?
                                                </p>
                                                <div>
                                                    <span style={{ color: '#929398' }}>Edit</span>
                                                    •
                                                    <span style={{ color: '#929398' }}>Delete</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="status">
                                <h6>STATUS</h6>
                                <select name="statusId" className="custom-select"



                                // const action = {
                                //     type:UPDATE_STATUS_TASK_SAGA,
                                //     taskUpdateStatus: {
                                //         taskId:taskDetailModal.taskId,
                                //         statusId:e.target.value,
                                //         projectId:taskDetailModal.projectId

                                //     }
                                // }

                                // // // console.log('action',action);
                                // console.log('taskupdatestatus',{
                                //     taskId:taskDetailModal.taskId,
                                //     statusId:e.target.value
                                // })

                                // dispatch(action)


                                >

                                </select>
                            </div>
                            <div className="assignees">
                                <h6>ASSIGNEES</h6>
                                <div className="row">


                                    <div className="col-6  mt-2 mb-2">




                                    </div>
                                </div>
                            </div>

                            <div className="priority" style={{ marginBottom: 20 }}>
                                <h6>PRIORITY</h6>
                                <select name="priorityId" className="form-control"   >




                                </select>
                            </div>
                            <div className="estimate">
                                <h6>ORIGINAL ESTIMATE (HOURS)</h6>
                                <input name="originalEstimate" type="text" className="estimate-hours" />


                            </div>
                            <div className="time-tracking">
                                <h6>TIME TRACKING</h6>


                            </div>
                            <div style={{ color: '#929398' }}>Create at a month ago</div>
                            <div style={{ color: '#929398' }}>Update at a few seconds ago</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
