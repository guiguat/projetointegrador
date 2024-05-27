export type Cat = { id?: number, img: string, name: string, age: string, sex: string, size: string }

export default function CatItem({img, name, age, sex, size}: Cat) {
    return <a

        href="https://www.instagram.com/m/gatosdalagoa"
        target="_blank" rel="noopener noreferrer"
        className="adoption-grid-item flex flex-col rounded-md shadow-lg cursor-pointer hover:shadow-xl col-span-1">
        {/*TODO: substituir por NextImage e alterar remotePatterns https://nextjs.org/docs/pages/api-reference/components/image#remotepatterns */}
        <div
            className="flex justify-center flex-none align-center overflow-hidden rounded-t-md">
            <img alt="gato"
                 loading="lazy"
                 className="shrink-0 min-w-full min-h-full"
                 src={img}/>
        </div>
        <div className="flex flex-col text-center py-4 flex-1">
            <h4 className="text-greendark font-bold text-lg text-wrap">{name}</h4>
            <p className="text-black text-sm text-wrap">{age} - {sex} - {size}</p>
        </div>
    </a>;
}