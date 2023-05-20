import { LikeOutlined, MessageOutlined, StarOutlined } from "@ant-design/icons";
import { Avatar, Card, List, Space, Typography, message } from "antd";
import React, { useEffect, useState } from "react";
import { DBCollectionName, readData } from "../../db/dbFunc";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { db } from "../../db/firebaseConfig";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../state/hooks";
import { setBlockly } from "../../state/reducers/blocklyReducer/blocklyReducer";

export const Projects = () => {
  const [data, setData] = useState<
    Array<{ id: string; title: string; content: string }>
  >([]);

  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [xml, setXml] = useState("");
  const dispatch = useAppDispatch();
  useEffect(() => {
    setListData();
  }, []);

  const setInitData = async (id: string) => {
    const docRef = doc(db, DBCollectionName, id as any);

    const docSnapshot = await getDoc(docRef);

    if (docSnapshot.exists()) {
      const data: any = { id: docSnapshot.id, ...docSnapshot.data() };
      setXml(data.data);
      dispatch(setBlockly(data.data));
      setLoading(false);
      navigate("/projects/" + id);
    } else {
      setLoading(false);
      message.error("Document does not exist.");
    }
  };

  const setListData = async () => {
    await getDocs(collection(db, DBCollectionName)).then((querySnapshot) => {
      let data: any = [];
      querySnapshot.forEach((doc) => {
        data.push({ id: doc.id, title: doc.id, content: doc.data().data });
      });
      setData(data);
    });
  };
  return (
    <div>
      {" "}
      <List
        loading={loading}
        itemLayout="vertical"
        size="large"
        pagination={{
          onChange: (page) => {
            console.log(page);
          },
          pageSize: 3,
        }}
        dataSource={data.reverse()}
        renderItem={(item) => (
          <List.Item
            key={item.title}
            className="cursor-pointer"
            onClick={() => {
              setLoading(true);
              setInitData(item.id);
            }}
          >
            <Card>
              <div className="cursor-pointer">
                <Typography.Title level={4}>
                  Document Id : {item.title}
                </Typography.Title>
              </div>
              {item.content}
            </Card>
          </List.Item>
        )}
      />
    </div>
  );
};
