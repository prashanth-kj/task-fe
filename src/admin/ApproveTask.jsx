import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import AxiosService from '../utils/Apiservice';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ApproveTask() {
  const params = useParams();
  const [task, setTask] = useState(null);
  const navigate = useNavigate();

  const getTask = async () => {
    try {
      const res = await AxiosService.get(`/admin/task/${params.id}`);
      console.log(res);
      setTask(res.data.task);
    } catch (error) {
      console.error('Error fetching task:', error);
    }
  };

  const changedStatus = async (status) => {
    try {
      const res = await AxiosService.put(`/admin/task/${params.id}/${status}`);
      if (res.status === 200) {
        navigate('/taskarea');
      }
    } catch (error) {
      console.error('Error updating task status:', error);
    }
  };

  useEffect(() => {
    if (params.id) {
      getTask();
    }
  }, [params.id]);

  if (!task) {
    return <p>Loading...</p>;
  }

  return (
    <div className="d-flex justify-content-center align-items-center ">
      <Card style={{ width: '350px', height: '300px' }}>
        <Card.Body>
          <Card.Title className='mt-2'>{task.title}</Card.Title>
          <Card.Text>
            {task.description}
          </Card.Text>
          <div>
            {task.status !== "pending" && (
              <Button 
                variant='warning' 
                className='w-100 p-2' 
                onClick={() => changedStatus("pending")}
              >
                Mark as Pending
              </Button>
            )}
            {task.status !== "completed" && (
              <Button 
                variant='success' 
                className='w-100 p-2' 
                onClick={() => changedStatus("completed")}
              >
                Mark as Completed
              </Button>
            )}
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ApproveTask;
