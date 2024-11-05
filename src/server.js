const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();


(async () => {
    const newEvent = await prisma.event.create({
        data: {
            slug: 'event2',
            title: 'Event 2',
            details: 'Event 2 Details',
            maximumAttendees: 20
        }
    })
    
    const events = await prisma.event.findMany();
    
    console.log(events)

})()
