"use client"

import * as React from "react"
import Link from "next/link";
import {Button} from "@/components/ui/button";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {Calendar} from "@/components/ui/calendar";
import {Popover,PopoverContent, PopoverTrigger} from "@/components/ui/popover";
import {Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue} from "@/components/ui/select"

import { cn } from "@/lib/utils"
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"

export const StyleGuide = () => {
    const [date, setDate] = React.useState();
    return (
        <>
            <div className = 'flex flex-col gap-y-4 p-24'>
                <h1>H1</h1>
                <h2>H2</h2>
                <h3>H3</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. A architecto asperiores dolor earum est harum,
                    labore laudantium, magni mollitia officiis quibusdam quis quos tenetur?
                    Aliquam autem consequatur eveniet ipsa tenetur!
                </p>
                <div className = 'bg-black p-24 flex flex-col gap-y-4'>
                    <Link href = '/'>Link</Link>
                    <Button variant = 'default'>Let`s eat</Button>
                    <Button variant = 'orange'>Let`s eat</Button>
                    <Button variant = 'input'>Let`s eat</Button>
                    <Button variant = 'orange' size = 'sm'> SmButt</Button>
                    <div>
                        <Label htmlFor = 'firstname'>First Name</Label>
                        <Input type = 'firstname' id = 'firstname'/>
                    </div>
                    <div>
                        <Label htmlFor = 'lastname'>Last Name</Label>
                        <Input type = 'lastname' id = 'lastname'/>
                    </div>
                    <div>
                        <Label>date</Label>
                        <Popover>
                            <PopoverTrigger asChild>
                                <Button
                                    variant = {'input'}
                                    className={cn("w-full justify-start text-left font-normal")}
                                >
                                    <CalendarIcon className="mr-2 h-4 w-4" />
                                    {date ? format(date, "PPP") : <span>Pick a date</span>}
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0" align="start">
                                <Calendar
                                    mode="single"
                                    selected={date}
                                    onSelect={setDate}
                                    initialFocus
                                />
                            </PopoverContent>
                        </Popover>
                    </div>
                    <div>
                        <Select>
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Select a fruit" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel>Fruits</SelectLabel>
                                    <SelectItem value="apple">Apple</SelectItem>
                                    <SelectItem value="banana">Banana</SelectItem>
                                    <SelectItem value="blueberry">Blueberry</SelectItem>
                                    <SelectItem value="grapes">Grapes</SelectItem>
                                    <SelectItem value="pineapple">Pineapple</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>

                    </div>
                </div>
            </div>
        </>
    )
}