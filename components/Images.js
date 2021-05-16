import Image from 'next/image';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import { Tooltip } from 'antd';
import { useMediaQuery } from 'react-responsive';
import Details from '../components/Details';
import { useState } from 'react';
import { Modal } from 'antd';

export default function Images({ data, loading }) {
  /* 
  props: {
    data: {
      links: {
        render: string;
        href: string;
        ...
      }[]
    },
    loading: bool;
  }
  */
  const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });
  const [detailedData, setDetailedData] = useState({});
  const [imageLink, setImageLink] = useState('');

  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  };
  const handleOk = () => {
    setIsModalVisible(false);
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return loading ? (
    <div className="loading">
      <Spin indicator={antIcon} />
      <style jsx>{`
        .loading {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          min-height: 100%;
        }
      `}</style>
    </div>
  ) : data.length === 0 ? (
    <></>
  ) : (
    <div className="images">
      <Details
        isModalVisible={isModalVisible}
        handleOk={handleOk}
        handleCancel={handleCancel}
        data={detailedData}
        link={imageLink}
      />
      {data.map((item) => {
        if (item.links) {
          const itemData = item.data[0];
          return item.links.map((link) => {
            if (link.render === 'image') {
              return (
                <div className="image-container" key={link.href}>
                  {isTabletOrMobile ? ( // Removes tooltip on mobile. Replace with text beneath instead.
                    <Image
                      src={link.href}
                      layout="fill"
                      objectFit="cover"
                      key={link.href}
                      onClick={() => {
                        showModal();
                        setDetailedData(itemData);
                        setImageLink(link.href);
                      }}
                    />
                  ) : (
                    <Tooltip title={itemData.title} placement="bottom">
                      <Image
                        src={link.href}
                        layout="fill"
                        objectFit="cover"
                        key={link.href}
                        onClick={() => {
                          showModal();
                          setDetailedData(itemData);
                          setImageLink(link.href);
                        }}
                      />
                    </Tooltip>
                  )}
                </div>
              );
            }
          });
        }
      })}
      <style jsx>{`
        .images {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, auto));
          grid-auto-flow: row;
          grid-auto-rows: minmax(300px, auto);
          gap: 12px;
          padding: 12px;
        }
        .image-container {
          position: relative;
          transition: all 0.1s ease-in-out;
        }
        .image-container:hover {
          transform: scale(1.05);
        }
      `}</style>
    </div>
  );
}
