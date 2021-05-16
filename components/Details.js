import Image from 'next/image';
import { Modal } from 'antd';
import { useWindowDimensions } from '../hooks';
import { theme } from '../constants';

export default function Details({
  data,
  link,
  handleOk,
  handleCancel,
  isModalVisible,
}) {
  const { width, height } = useWindowDimensions();
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
      mask={false}
      cancelButtonProps={{ style: { display: 'none' } }}
      centered={true}
    >
      <Image
        src={link}
        height={height - 100}
        width={width - 40}
        objectFit="contain"
      />
      <p>{data.description}</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </Modal>
  );
}
