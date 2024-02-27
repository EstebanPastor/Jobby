"use client";

import { useForm } from "react-hook-form";

import { createJob, type FormData } from "../actions/createJobActions";

import clsx from "clsx";

import Button from "@/components/ui/button/Button";
import Input from "@/components/ui/input/Input";

import { useState, useEffect } from "react";

import { useEdgeStore } from "@/lib/edgestore";

const CreateForm = () => {
  const [file, setFile] = useState<File>();
  const [imagePath, setImagePath] = useState("");
  const { edgestore } = useEdgeStore();

  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors, isSubmitting, isDirty, dirtyFields },
    reset,
  } = useForm<FormData>({
    defaultValues: {
      name: "",
      author: "",
      description: "",
      location: "",
      img: "",
      employmentType: "",
    },
  });

  useEffect(() => {
    if (file) {
      uploadImageHandler();
    }
  }, [file]);

  const uploadImageHandler = async () => {
    if (file) {
      const res = await edgestore.publicFiles.upload({ file });
      setValue("img", res.url);
    }
  };

  const onSubmit = handleSubmit(async (data) => {
    await createJob(data);
    reset();
  });

  return (
    <>
      <form onSubmit={onSubmit} className="mt-10">
        <div className="flex flex-col sm:gap-10 gap-5">
          <div className="grid sm:grid-cols-2 gap-5">
            <Input
              id="name"
              label="Job Title"
              errors={errors}
              disabled={isSubmitting}
              register={{
                ...register("name", { required: true }),
              }}
            />
            <Input
              id="location"
              label="Location"
              errors={errors}
              disabled={isSubmitting}
              register={{
                ...register("location", { required: true }),
              }}
            />
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            <Input
              id="author"
              label="Company Name"
              errors={errors}
              disabled={isSubmitting}
              register={{
                ...register("author", { required: true }),
              }}
            />
            <Input
              id="salary"
              label="Salary"
              errors={errors}
              disabled={isSubmitting}
              register={{
                ...register("salary", {
                  required: true,
                  validate: (value) => {
                    const parsedValue = parseFloat(value.replace(/,/g, ""));
                    return !isNaN(parsedValue) || "Must be a number";
                  },
                }),
              }}
            />
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            <Input
              id="file"
              label="Select Company Image"
              type="file"
              disabled={isSubmitting}
              onChange={(e) => {
                setFile(e.target.files?.[0]);
              }}
            />
            <div>
              <label
                htmlFor="employmentType"
                className="block text-sm font-medium leading-6 text-gray-900 mb-2"
              >
                Employment Type:
              </label>
              <select
                id="employmentType"
                {...register("employmentType", { required: true })}
                disabled={isSubmitting}
                className={clsx(
                  `block w-full rounded-md border-0 py-3 px-1 text-gray-900 shadow-md ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:outline-purple-600 sm:text-sm sm:leading-6 mb-5`,
                  isSubmitting && "opacity-50 cursor-default"
                )}
                defaultValue="Part-time"
              >
                <option value="Part-time">Part-time</option>
                <option value="Full-time">Full-time</option>
                <option value="Temporary">Temporary</option>
              </select>
            </div>
          </div>
          <Input
            isTextArea
            id="description"
            label="Description"
            errors={errors}
            disabled={isSubmitting}
            register={{
              ...register("description", { required: true }),
            }}
          />
        </div>
        <input type="hidden" id="img" {...register("img")} />
        <Button marginTop type="submit">
          Submit
        </Button>
      </form>
    </>
  );
};

export default CreateForm;
