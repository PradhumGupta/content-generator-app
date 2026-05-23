"use client";
import Image from "next/image"
import { TEMPLATE } from "../../_components/TemplateListSection"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { useState } from "react";
import { LoaderIcon } from "lucide-react";

interface PROPS {
    selectedTemplate?: TEMPLATE;
    userFormInput: any;
    loading: boolean
}

function FormSection({ selectedTemplate, userFormInput, loading }: PROPS) {

    const  [formData, setFormData] = useState<any>();
    const displayName = selectedTemplate?.name?.replace(/-/g, " ");

    const handleInputChange = (e: any) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]:value})
    }

    const onSubmit = (e: any) => {
        e.preventDefault();
        userFormInput(formData);
    }

  return (
    <section className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm md:p-8">
        {selectedTemplate?.icon && (
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gray-50">
                <Image src={selectedTemplate.icon} alt='' width={40} height={40} />
            </div>
        )}

        <p className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
            {selectedTemplate?.category}
        </p>
        <h1 className="mt-3 text-3xl font-black tracking-tight text-black">
            {displayName}
        </h1>
        <p className="mt-4 text-sm leading-6 text-gray-600">{selectedTemplate?.desc}</p>

        <form className="mt-6" onSubmit={onSubmit}>
            {selectedTemplate?.form?.map((item, index) => (
                <div key={index} className="my-4 flex flex-col gap-2">
                    <label className="text-sm font-bold text-black">{item.label}</label>
                    {item.field == 'input' ? 
                        <Input name={item.name} required={item?.required} onChange={handleInputChange} className="h-12 rounded-2xl border-gray-200 bg-gray-50 px-4" />
                        : item.field == 'textarea' ?
                        <Textarea name={item.name} required={item?.required} onChange={handleInputChange} className="min-h-36 rounded-2xl border-gray-200 bg-gray-50 px-4 py-3" /> : null
                    }
                </div>
            ))}
            <Button type="submit" className='mt-4 w-full rounded-2xl bg-black py-6 font-semibold text-white hover:bg-gray-800' disabled={loading} >
                {loading && <LoaderIcon className="animate-spin" />}
                Generate Content
            </Button>
        </form>
    </section>
  )
}

export default FormSection
