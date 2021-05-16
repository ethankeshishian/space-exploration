import Image from 'next/image';

export default function Images({ data }) {
  console.log(data);
  return data.length === 0 ? (
    <></>
  ) : (
    <div className="images">
      {data.map((item) => {
        if (item.links) {
          return item.links.map((link) => {
            if (link.render === 'image') {
              return (
                <div className="image-container">
                  <Image src={link.href} layout="fill" objectFit="cover" />
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
