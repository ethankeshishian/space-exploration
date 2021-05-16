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
    >
      <div style={{ width: width, height: 0.6 * height, position: 'relative' }}>
        <Image src={link} layout="fill" objectFit="contain" />
      </div>
      <p style={{ fontSize: '2em', margin: 0, marginBottom: '.25em' }}>
        {data.description}
      </p>
      {data.date_created ? (
        <p
          style={{
            fontStyle: 'italic',
            fontSize: '1.5em',
            margin: '0',
            display: 'inline-block',
          }}
        >
          <Date dateString={data.date_created} />
        </p>
      ) : (
        <></>
      )}
      {data.center ? (
        <p
          style={{
            fontStyle: 'italic',
            fontSize: '1.5em',
            margin: '0',
            display: 'inline-block',
          }}
        >
          {' - '}
          {data.center}
        </p>
      ) : (
        <></>
      )}
      {data.location ? (
        <p
          style={{
            fontSize: '1.5em',
            margin: '0',
          }}
        >
          Location: {data.location}{' '}
        </p>
      ) : (
        <></>
      )}
      {tags === '' ? (
        <></>
      ) : (
        <p style={{ fontSize: '1.5em', margin: '0' }}>Tags: {tags}</p>
      )}
    </Modal>
  );
}
