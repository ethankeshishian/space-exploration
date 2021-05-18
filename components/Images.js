import Image from 'next/image';
import Details from './Details';
import { Spin, Tooltip } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';

// This component shows search results. While searching, displays loading component.
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

  // State variables update when image is clicked. State passed to child Details component
  const [detailedData, setDetailedData] = useState({});
  const [imageLink, setImageLink] = useState('');

  // Variables for child Detail component logic
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
    <div className={isTabletOrMobile ? 'images-mobile' : 'images-desktop'}>
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
                <div>
                  {isTabletOrMobile ? ( // Replaces tooltip with image caption on mobile
                    <>
                      <div className="image-container" key={link.href}>
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
                      </div>
                      <div className="title-container">
                        <span className="image-title">{itemData.title}</span>
                      </div>
                    </>
                  ) : (
                    <div className="image-container" key={link.href}>
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
                    </div>
                  )}
                </div>
              );
            }
          });
        }
      })}
      <style jsx>{`
        .images-mobile,
        .images-desktop {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, auto));
          grid-auto-flow: row;
          gap: 12px;
          padding: 12px;
        }
        .images-mobile {
          grid-auto-rows: minmax(332px, auto);
        }
        .images-desktop {
          grid-auto-rows: minmax(300px, auto);
        }
        .image-container {
          position: relative;
          transition: all 0.1s ease-in-out;
          height: 300px;
        }
        .image-container:hover {
          transform: scale(1.05);
          cursor: pointer;
        }
        .title-container {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          min-height: 32px;
        }
        .image-title {
        }
      `}</style>
    </div>
  );
}
