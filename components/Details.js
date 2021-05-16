import Image from 'next/image';
import { Modal } from 'antd';
import { useWindowDimensions } from '../hooks';
import { theme } from '../constants';
import Date from './Date';

export default function Details({
  data,
  link,
  handleOk,
  handleCancel,
  isModalVisible,
}) {
  /* 
  props: {
    data: {
      description: string;
      date_created: string;
      location: string;
      center: string;
      ...
    }
    link: string;
    handleOk: Function;
    handleCancel: Function;
    isModalVisible: bool;
  }
  */
  const { width, height } = useWindowDimensions();
  const tags = data.keywords ? data.keywords.join(', ') : '';
  return (
    <Modal
      title={data.title}
      visible={isModalVisible}
      onOk={handleOk}
      onCancel={handleCancel}
      bodyStyle={{
        backgroundColor: theme.backgroundTheme,
      }}
      width={width}
      cancelButtonProps={{ style: { display: 'none' } }}
      centered={true}
      maskStyle={{ background: 'rgba(0, 0, 0, 0.9)' }}
    >
      <div className="image-container">
        <Image src={link} layout="fill" objectFit="contain" />
      </div>
      <p className="description">{data.description}</p>
      {data.date_created ? (
        <p className="text text-italic">
          <Date dateString={data.date_created} />
        </p>
      ) : (
        <></>
      )}
      {data.center ? (
        <p className="text text-italic">
          {' - '}
          {data.center}
        </p>
      ) : (
        <></>
      )}
      {data.location ? (
        <p className="text">Location: {data.location} </p>
      ) : (
        <></>
      )}
      {tags === '' ? <></> : <p className="text">Tags: {tags}</p>}
      <style jsx>{`
        .text {
          font-size: 1.5em;
          margin: 0;
        }
        .text-italic {
          font-style: italic;
          display: inline-block;
        }
        .description {
          font-size: 2em;
          margin: 0;
          margin-bottom: 0.25em;
        }
        .image-container {
          width: ${(width >= 767 ? width - 32 - 48 : width - 16 - 48) + 'px'};
          height: ${0.6 * height + 'px'};
          position: relative;
        }
        .description: {
          font-size: 2em;
          margin: 0;
          margin-bottom: 0.25em;
        }
      `}</style>
    </Modal>
  );
}
