import Image from 'next/image';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import { Tooltip } from 'antd';
import { useMediaQuery } from 'react-responsive';

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
  console.log(data);
  const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });

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
      {data.map((item) => {
        if (item.links) {
          const data = item.data[0];
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
                    />
                  ) : (
                    <Tooltip title={data.title} placement="bottom">
                      <Image
                        src={link.href}
                        layout="fill"
                        objectFit="cover"
                        key={link.href}
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
