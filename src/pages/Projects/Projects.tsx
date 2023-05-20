import { LikeOutlined, MessageOutlined, StarOutlined } from "@ant-design/icons";
import { Avatar, Card, List, Space, Typography } from "antd";
import React, { useEffect, useState } from "react";
import { DBCollectionName, readData } from "../../db/dbFunc";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../db/firebaseConfig";
import { useNavigate } from "react-router-dom";

export const Projects = () => {
  const [data, setData] = useState<
    Array<{ id: string; title: string; content: string }>
  >([]);
  const navigate = useNavigate();
  useEffect(() => {
    setListData();
  }, []);

  const setListData = async () => {
    await getDocs(collection(db, DBCollectionName)).then((querySnapshot) => {
      let data: any = [];
      querySnapshot.forEach((doc) => {
        data.push({ id: doc.id, title: doc.id, content: doc.data().data });
      });
      console.log(data);
      setData(data);
    });
  };
  return (
    <div>
      {" "}
      <List
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
            onClick={() => navigate("/projects/" + item.id)}
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
