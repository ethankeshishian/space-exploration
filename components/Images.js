import Image from 'next/image';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

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
          return item.links.map((link) => {
            if (link.render === 'image') {
              return (
                <div className="image-container" key={link.href}>
                  <Image
                    src={link.href}
                    layout="fill"
                    objectFit="cover"
                    key={link.href}
                  />
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
        }
      `}</style>
    </div>
  );
}
