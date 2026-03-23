import { exec } from 'child_process';
import { promisify } from 'util';
import { NextResponse } from 'next/server';

const execAsync = promisify(exec);

export async function GET() {
  try {
    // Execute the bash script
    const { stdout } = await execAsync('sh ./scripts/greet.sh');
    
    // Return the result as a clean JSON object
    return NextResponse.json({ greeting: stdout.trim() });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to run script' }, { status: 500 });
  }
}
