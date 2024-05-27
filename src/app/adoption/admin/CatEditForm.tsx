'use client'
import CatItem, {Cat} from "@/app/components/CatItem";
import * as yup from "yup"
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {useCallback, useState} from "react";
import {Button, Field, Fieldset, Input, Label, Legend, Select} from "@headlessui/react";
import { MdDelete } from "react-icons/md";

const schema = yup.object({
    id: yup.number().required("Campo obrigatório"),
    img: yup.string().required("Campo obrigatório"),
    name: yup.string().required("Campo obrigatório"),
    age: yup.string().required("Campo obrigatório"),
    sex: yup.string().required("Campo obrigatório"),
    size: yup.string().required("Campo obrigatório")
}).required()
const schema2 = yup.object({
    img: yup.string().required("Campo obrigatório"),
    name: yup.string().required("Campo obrigatório"),
    age: yup.string().required("Campo obrigatório"),
    sex: yup.string().required("Campo obrigatório"),
    size: yup.string().required("Campo obrigatório")
}).required()

export default function CatEditForm({catsJson}: { catsJson: string }) {
    const [cats, setCats] = useState<Cat[]>(catsJson? JSON.parse(catsJson) : [])
    async function deleteCat(id: number) {
        await fetch(`/api/cats`, {
            method: 'DELETE',
            headers: {'Content-type': 'application/json', 'cat_id': id.toString()},
        }).then((res) => res.json())
            .then(() => {setCats(c => c.filter(it => it.id !== id))})
            .catch(console.error)
    }
    return <main className='bg-white px-10 md:px-24 py-10 flex flex-col h-full items-center'>
        <CatCreateForm onAddCat={(nc) => {setCats(c =>[...c, ...nc])}}/>
        <div className="relative flex py-5 items-center w-full">
            <div className="flex-grow border-t border-gray-400"></div>
        </div>
        <div className="flex flex-col gap-10 mt-10 adoption-edit-grid h-full">
            {
                cats.map(cat => <CatEditItem key={cat.id} cat={cat} onDelete={id => deleteCat(id)}/>)
            }
        </div>
    </main>
}

function CatEditItem({cat, onDelete}: {cat: Cat, onDelete: (id: any) => void}) {
    const [isLoading, setIsLoading] = useState(false)
    const {
        register,
        handleSubmit,
        reset,
        watch,
        formState: {errors},
    } = useForm({
        resolver: yupResolver(schema), defaultValues: {
            ...cat, id: cat.id!!
        }
    })
    const onSubmit = async (data: any) => {
        setIsLoading(true)
        try {
            const result: Cat[] = await fetch('/api/cats', {
                method: 'PUT',
                headers: {'Content-type': 'application/json',},
                body: JSON.stringify(data),
            }).then((res) => res.json())
            if (result === null || result === undefined || result.length < 1) {
                reset(cat)
            } else reset(result[0])
        } catch (ex: any) {console.error(ex)}
        setIsLoading(false)
    }
    const name = watch("name", cat.name)
    const id = useCallback((str: string) => `${cat.id}-${str}`, [cat.id])
    const onDeleteCb = useCallback(() => onDelete(cat.id), [cat.id, onDelete])
    return <form onSubmit={handleSubmit(onSubmit)} className='adoption-edit-grid-item'>
        <Fieldset className="flex flex-col gap-8 bg-white shadow-md p-3 w-full" disabled={isLoading}>
            <div className='flex justify-space items-center w-full'>
                <Legend className="text-lg font-bold w-full">{cat.id} - {name}</Legend>
                <Button onClick={onDeleteCb}><MdDelete className='text-red-900 h-8 w-8'/></Button>
            </div>
            <Field className="w-full">
                <Label className="block" htmlFor={id('img')}>Imagem (URL)</Label>
                <Input className="block w-full" {...register("img")} id={id('img')}/>
                <p className='text-red-900 mt-1 text-sm'>{errors.img?.message}</p>
            </Field>
            <Field className="w-full">
                <Label className="block" htmlFor={id('name')}>Nome</Label>
                <Input className="block w-full" {...register("name")} id={id('name')}/>
                <p className='text-red-900 mt-1 text-sm'>{errors.name?.message}</p>
            </Field>
            <div className="flex items-center gap-3">
                <Field className='w-full'>
                    <Label className="block" htmlFor={id('age')}>Idade</Label>
                    <Select className="w-full" {...register("age")} id={id('age')}>
                        <option value="BABY">Bebê</option>
                        <option value="ADULT">Adulto</option>
                    </Select>
                    <p className='text-red-900 mt-1 text-sm'>{errors.age?.message}</p>
                </Field>
                <Field className='w-full'>
                    <Label className="block" htmlFor={id('sex')}>Sexo</Label>
                    <Select className="w-full" {...register("sex")} id={id('sex')}>
                        <option value="FEMALE">Fêmea</option>
                        <option value="MALE">Macho</option>
                    </Select>
                    <p className='text-red-900 mt-1 text-sm'>{errors.sex?.message}</p>
                </Field>
                <Field className='w-full'>
                    <Label className="block" htmlFor={id('size')}>Tamanho</Label>
                    <Select className="w-full" {...register("size")} id={id('size')}>
                        <option value="SMALL">Pequeno</option>
                        <option value="MEDIUM">Médio</option>
                        <option value="BIG">Grande</option>
                    </Select>
                    <p className='text-red-900 mt-1 text-sm'>{errors.size?.message}</p>
                </Field>
            </div>
            <Button type='submit'
                    className="rounded bg-greendark font-bold py-2 px-4 text-sm text-white data-[hover]:bg-green data-[hover]:text-black data-[active]:bg-green">
                Salvar alterações
            </Button>
        </Fieldset>
    </form>
}

function CatCreateForm({onAddCat}: {onAddCat: (cats: Cat[]) => void}) {
    const [isLoading, setIsLoading] = useState(false)

    const {
        register,
        handleSubmit,
        control,
        formState: {errors}
    } = useForm({resolver: yupResolver(schema2)})

    const onSubmit = async (data: Cat) => {
        setIsLoading(true)
        try {
            const result: Cat[] = await fetch('/api/cats', {
                method: 'POST',
                headers: {'Content-type': 'application/json',},
                body: JSON.stringify(data),
            }).then((res) => res.json())
            onAddCat(result)
        } catch (ex: any) {console.error(ex)}
        setIsLoading(false)
    }

    return <form onSubmit={handleSubmit(onSubmit)} className='w-full'>
        <Fieldset className="flex flex-col gap-3 bg-white w-full" disabled={isLoading}>
            <Legend className="text-2xl font-bold">Novo gato:</Legend>
            <div className="flex flex-col md:flex-row items-center w-full gap-3">
                <Field className="w-full">
                    <Label className="block" htmlFor='img'>Imagem</Label>
                    <Input className="block w-full" {...register("img")} id='img'/>
                    <p className='text-red-900 mt-1 text-sm'>{errors.img?.message}</p>
                </Field>
                <Field className="w-full">
                    <Label className="block" htmlFor='name'>Nome</Label>
                    <Input className="block w-full" {...register("name")} id='name'/>
                    <p className='text-red-900 mt-1 text-sm'>{errors.name?.message}</p>
                </Field>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-3">
                <Field className="w-full">
                    <Label className="block" htmlFor='age'>Idade</Label>
                    <Select className="w-full" {...register("age")} id='age'>
                        <option value="BABY">Bebê</option>
                        <option value="ADULT">Adulto</option>
                    </Select>
                    <p className='text-red-900 mt-1 text-sm'>{errors.age?.message}</p>
                </Field>
                <Field className="w-full">
                    <Label className="block" htmlFor='sex'>Sexo</Label>
                    <Select className="w-full" {...register("sex")} id='sex'>
                        <option value="FEMALE">Fêmea</option>
                        <option value="MALE">Macho</option>
                    </Select>
                    <p className='text-red-900 mt-1 text-sm'>{errors.sex?.message}</p>
                </Field>
                <Field className="w-full">
                    <Label className="block" htmlFor='size'>Tamanho</Label>
                    <Select className="w-full" {...register("size")} id='size'>
                        <option value="SMALL">Pequeno</option>
                        <option value="MEDIUM">Médio</option>
                        <option value="BIG">Grande</option>
                    </Select>
                    <p className='text-red-900 mt-1 text-sm'>{errors.size?.message}</p>
                </Field>
            </div>
            <Button type='submit'
                    className="w-full rounded bg-greendark font-bold py-2 px-4 text-sm text-white data-[hover]:bg-green data-[hover]:text-black data-[active]:bg-green">
                Adicionar gato
            </Button>
        </Fieldset>
    </form>
}