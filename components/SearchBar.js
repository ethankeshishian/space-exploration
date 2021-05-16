import { Input } from 'antd';
const { Search } = Input;

export default function SearchBar(props) {
  //props: {search: Function}
  // const fetcher = (url) => fetch(url).then((r) => r.json());
  // const { data, error } = useSWR('/api/searchNasa', fetcher);

  // if (error) return <div>failed to load</div>;
  // if (!data) return <div>loading...</div>;
  // if (data) console.log(data);
  return (
    <div className="container">
      <Search
        placeholder="Search database"
        allowClear
        enterButton="Search"
        size="large"
        onSearch={props.search}
      />
      <style jsx>{`
        .container {
          height: 30vh;
          display: flex;
          justify-content: center;
          align-items: center;
          background-image: url('https://www.pbs.org/wgbh/nova/media/images/shutterstock_1041249343.width-800.jpg');
          background-position: 0% 50%;
          background-repeat: no-repeat;
          background-size: cover;
          padding: 5%;
        }
      `}</style>
    </div>
  );
}
