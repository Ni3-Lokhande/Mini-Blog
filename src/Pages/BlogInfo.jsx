
import React, { useContext, useEffect, useState } from 'react';
import { Container, Card } from 'react-bootstrap';
import MyContext from '../context/data/MyContext';
import { useParams } from 'react-router-dom';
import { addDoc, collection, doc, getDoc, onSnapshot, orderBy, query, QuerySnapshot, Timestamp } from 'firebase/firestore';
import { fireDb } from '../firebase/FirebaseConfig';
import Loader from './Loader';
import Comment from './Comment';
import toast from 'react-hot-toast';


const BlogInfo = () => {

  const context = useContext(MyContext);
  const {loading, setLoading} = context;
  const params = useParams();
 
  const [getBlogs, setGetBlogs] = useState();
  const [fullName, setFullName] = useState('');
  const [commentText, setCommentText] = useState('');
  const [allComment, setAllComment] = useState([]);


  function createMarkup(c) {
    return { __html: c };
  }

   const formatDate = (timestamp) => {
    if (!timestamp || !timestamp.seconds) {
      return 'Unknown Date'; // Handle missing or incorrect date format
    }
    const date = new Date(timestamp.seconds * 1000);
    return date.toLocaleString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    });
  };

  const getAllBlogs = async () => {
    setLoading(true);
    try {
      const productTemp = await getDoc(doc(fireDb, "blogPost", params.id))
      if (productTemp.exists()) {
        setGetBlogs(productTemp.data());
      } else {
        console.log("Document does not exist");
      }
      setLoading(false)

    } catch (error) {
      console.log(error);
      setLoading(false) 
    };
  }


  const addComment = async () => {
    const commentRef = collection(fireDb, `blogPost/${params.id}/comment`)
    try {
      await addDoc(
        commentRef,{
          fullName, 
          commentText,
        time: Timestamp.now(),
        date: new Date().toLocaleString(
          "en-US",
          {
            month: "long",
            day: "2-digit",
            year: "numeric",
          }
        )
      })
      toast.success('Comment Add Successfully');
      setFullName('')
      setCommentText('')
    } catch (error) {
      console.log(error);
      
    }
  }


  const getComment = async () => {
    try {
      const q = query(
        collection(fireDb, `blogPost/${params.id}/comment`),
        orderBy('time')
      );
      const data = onSnapshot(q, (QuerySnapshot) => {
        let productsArray = [];
        QuerySnapshot.forEach((doc) => {
          productsArray.push({...doc.data(), id: doc.id });
        });
        setAllComment(productsArray)
        console.log(productsArray);
      });
      return () => data;
    } catch (error) {
      console.log(error);
      
    }
  }

  useEffect(() => {
    getAllBlogs();
    getComment();
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="mt-5">
      <Container className="mt-5">
        {loading
        ?
        <Loader />
        :
        <Card>
            <Card.Img
              top
              src={getBlogs?.image}
              alt="Blog Image"
              style={{ height: 'auto', objectFit: 'Cover', maxHeight: '530px' }}
              className='img-fluid'
            />
          <Card.Body>
            <Card.Title>{getBlogs?.title}</Card.Title>
            <Card.Text>
              <div dangerouslySetInnerHTML={createMarkup(getBlogs?.content)} />
            </Card.Text>
          </Card.Body>
          <Card.Footer>
          <small className="text-muted">
                    Updated on - {formatDate(getBlogs?.createdAt)}
                  </small>
          </Card.Footer>
        </Card>

        
      }
       <div><Comment 
                 addComment={addComment}
                 commentText={commentText}
                 setCommentText={setCommentText}
                 allComment={allComment}
                 fullName={fullName}
                 setFullName={setFullName} 
       /></div>  
      </Container>
    </div>
  );
};

export default BlogInfo;





